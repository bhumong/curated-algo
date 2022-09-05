class Decimal {
    rational = null
    decimal = null

    constructor(val) {
        if (typeof val === 'number' || typeof val === 'string') {
            const numberStr = this.filterStringNumber(val).split('.')
            this.rational = numberStr[0] ?? null
            this.decimal = numberStr[1] ?? null
        } else {
            throw new Error('invalid data type')
        }
    }

    add(other) {
        const otherDecimal = other instanceof Decimal ? other : new Decimal(other)
        if (otherDecimal.decimal === null && this.decimal === null) {
            return (Number(otherDecimal.rational) + Number(this.rational)).toString()
        }
        this.normalize(otherDecimal)
        const rationalAdd = Number(this.rational) + Number(otherDecimal.rational)
        const decimalAdd = Number(this.decimal) + Number(otherDecimal.decimal)
        return `${rationalAdd}.${decimalAdd}`
    }

    normalize(other) {
        if (other instanceof Decimal) {
            const ownDecimalLength = `${this.decimal}`.length
            const otherDecimalLength = `${other.decimal}`.length
            const diff = Math.abs(ownDecimalLength - otherDecimalLength)
                
            if (diff > 0) {
                for (let index = 0; index < diff; index++) {
                    if (ownDecimalLength > otherDecimalLength) {
                        other.decimal = `${other.decimal}`.concat('0')
                    } else {
                        this.decimal = `${this.decimal}`.concat('0')
                    }
                }
            }
        } else {
            throw new Error('invalid data type')
        }

    }

    toString() {
        return `${this.rational}.${this.decimal}`
    }

    filterStringNumber(val) {
        return `${val}`.replace(/\D\./g, "")
    }
}

module.exports = {
    Decimal
}