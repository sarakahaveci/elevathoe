export type CallStatus = 'Closed' | string

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
