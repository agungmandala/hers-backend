import { permissionList } from "./default"

export interface IPermission {
  location: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  jobPosition: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  users: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  userPermissions: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  categoryStock: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  categoryTreatment: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  categoryProduct: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  unit: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  product: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  productBundle: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  inventory: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  stockTransfer: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  treatment: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  customer: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  purchase: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  queue: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  medicalRecords: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  consultation: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  selling: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  transactionHistory: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  discount: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  sellingStockClinic: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  feeReport: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  incomeReport: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  attendanceReport: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  customerNextVisit: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  employeeLeavePermit: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  stockOpname: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  crmDashboard: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  posDashboard: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  stockManagementDashboard: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  province: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  citiesDistricts: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  subDistricts: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  assets: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  employeeInOutReport: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  queueSalon: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  sellingProductSalon: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  customerSalon: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  posSalonDashboard: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  paymentMethod: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  expenseCategories: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  expenses: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  treatmentReport: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  disciplinaryActionEmployee: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
  disciplinaryAction: {
    title: string
    apiUrl: string
    create: boolean | null
    read: boolean | null
    update: boolean | null
    delete: boolean | null
  }
}

export const defaultPermission: IPermission = {
  ...permissionList,
}
