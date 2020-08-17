export interface Order {
    generalInformation: {
        divisionCode: number,
        specificationCode: number,
        subcontractDescription: string,
        subcontractNickname: string,
        age: string,
        author: string,
        description: string
    },
    details: {
        categories: string,
        status: string,
        statusChange: string,
        reason: string,
        modified: string
    },
    scheduleImpact: {
        scheduleImpact: boolean,
        numberOfDays: number,
        costOfImpact: number
    },
    submittedCosts: {
        costs: number,
        date: string,
        insurance: number,
        bond: number,
        GC: number,
        GCAmount: number,
        totalCost: number
    },
    revisedCosts: {
        costs: number,
        date: string,
        insurance: number,
        bond: number,
        GC: number,
        GCAmount: number,
        totalCost: number
    },
    approvedCosts: {
        costs: number,
        date: string,
        insurance: number,
        bond: number,
        GC: number,
        GCAmount: number,
        totalCost: number
    }
}

export interface OrderInitialStateType {
    order: Order,
    error: string
}
