// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Utils Import
import { getDateRange } from 'src/@core/utils/get-daterange'

// ** Types
import { InvoiceType, CallType } from 'src/types/apps/callTypes'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: 'short' })

const data: { calls: CallType[] } = {
  calls: [
      {
        id: 1,
        issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
        project: 'Nike',
        customer: 'Cevahir AVM',
        maintainer: 'Ali Yildirim',
        duration: '01:01',
        elevatorId: '11-22-33',
        status: 'Open'
      },
      {
        id: 2,
        issuedDate: `14 ${currentMonth} ${now.getFullYear()}`,
        project: 'Adidas',
        customer: 'Profilo AVM',
        maintainer: 'Ali Yildirim',
        duration: '01:01',
        elevatorId: '11-22-33',
        status: 'Closed'
      },
      {
        id: 3,
        issuedDate: `15 ${currentMonth} ${now.getFullYear()}`,
        project: 'Nike',
        customer: 'Cevahir AVM',
        maintainer: 'Ali Yildirim',
        duration: '01:01',
        elevatorId: '11-22-33',
        status: 'Closed'
      },
      {
        id: 4,
        issuedDate: `16 ${currentMonth} ${now.getFullYear()}`,
        project: 'Adidas',
        customer: 'Profilo AVM',
        maintainer: 'Ali Yildirim',
        duration: '01:01',
        elevatorId: '11-22-33',
        status: 'Open'
      },
  ]
};

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/apps/call/calls').reply(config => {
  const { q = '', status = '', dates = [] } = config.params ?? ''
  const queryLowered = q.toLowerCase()
  const filteredData = data.calls.filter(call => {
    if (dates.length) {
      const [start, end] = dates
      const filtered: number[] = []
      const range = getDateRange(start, end)
      const invoiceDate = new Date(call.issuedDate)

      range.filter(date => {
        const rangeDate = new Date(date)
        if (
          invoiceDate.getFullYear() === rangeDate.getFullYear() &&
          invoiceDate.getDate() === rangeDate.getDate() &&
          invoiceDate.getMonth() === rangeDate.getMonth()
        ) {
          filtered.push(call.id)
        }
      })

      if (filtered.length && filtered.includes(call.id)) {
        return (
          (call.customer.toLowerCase().includes(queryLowered) ||
            call.project.toLowerCase().includes(queryLowered) ||
            String(call.id).toLowerCase().includes(queryLowered) ||
            call.issuedDate.toLowerCase().includes(queryLowered)) &&
          call.status.toLowerCase() === (status.toLowerCase() || call.status.toLowerCase())
        )
      }
    } else {
      return (
        (call.customer.toLowerCase().includes(queryLowered) ||
          call.project.toLowerCase().includes(queryLowered) ||
          String(call.id).toLowerCase().includes(queryLowered) ||
          call.issuedDate.toLowerCase().includes(queryLowered)) &&
        call.status.toLowerCase() === (status.toLowerCase() || call.status.toLowerCase())
      )
    }
  })

  return [
    200,
    {
      params: config.params,
      allData: data.calls,
      calls: filteredData,
      total: filteredData.length
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------
mock.onGet('apps/call/single-invoice').reply(config => {
  const { id } = config.params

  const invoiceData = data.calls.filter(call => call.id === parseInt(id, 10))
  if (invoiceData.length) {
    const responseData = {
      invoice: invoiceData[0],
      paymentDetails: {
        totalDue: '$12,110.55',
        bankproject: 'American Bank',
        maintainer: 'United States',
        iban: 'ETD95476213874685',
        swiftCode: 'BR91905'
      }
    }

    return [200, responseData]
  } else {
    return [404, { message: 'Unable to find the requested invoice!' }]
  }
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet('/apps/call/clients').reply(() => {
  const clients = data.calls.map(call => {
    const { elevatorId, customer, maintainer, project } = call

    return {
      project,
      elevatorId,
      maintainer,
      customer
    }
  })

  return [200, clients.slice(0, 5)]
})

// ------------------------------------------------
// DELETE: Deletes Invoice
// ------------------------------------------------
mock.onDelete('/apps/call/delete').reply(config => {
  // Get invoice id from URL
  const invoiceId = Number(config.data)
  const invoiceIndex = data.calls.findIndex(t => t.id === invoiceId)
  data.calls.splice(invoiceIndex, 1)

  return [200]
})
