export type InvoiceStatus = 'Paid' | string

export type CallStatus = 'Closed' | string

export type InvoiceLayoutProps = {
  id: string | undefined
}

export type InvoiceClientType = {
  name: string
  address: string
  company: string
  country: string
  contact: string
  companyEmail: string
}

export type CallType = {
  id: number
  duration: string
  issuedDate: string
  project: string
  customer: string
  elevatorId: string
  maintainer: string
  status: CallStatus
}

export type InvoiceType = {
  id: number
  project: string
  total: number
  avatar: string
  service: string
  dueDate: string
  elevatorId: string
  company: string
  maintainer: string
  contact: string
  avatarColor?: string
  issuedDate: string
  customer: string
  balance: string | number
  invoiceStatus: CallStatus
}

export type InvoicePaymentType = {
  iban: string
  totalDue: string
  bankName: string
  country: string
  swiftCode: string
}

export type SingleInvoiceType = {
  invoice: InvoiceType
  paymentDetails: InvoicePaymentType
}
