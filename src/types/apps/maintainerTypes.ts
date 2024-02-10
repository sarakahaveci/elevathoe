// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type MaintainerTypes = {
  id: number
  fullName: string
  phoneNumber: string
}

export type ProjectListDataType = {
    id: number
    img: string
    hours: string
    totalTask: string
    projectType: string
    projectTitle: string
    progressValue: number
    progressColor: ThemeColor
  }