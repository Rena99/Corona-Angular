import { PatientsPath } from "./patientsPath"

export interface Patient {
      id: number
      patientName: string
      passwordPatient: number
      path: PatientsPath[]
      token: string
      age: number
   
}