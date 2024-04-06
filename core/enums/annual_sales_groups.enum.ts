/* eslint-disable no-unused-vars */

export enum AnnualSalesGroups {
    GreaterThan0Too100K = '0 < x <= 100k',
    GreaterThan100KTo1M = '100k < x <= 1M',
    GreaterThan1MTo10M = '1M < x <= 10M',
    GreaterThan10MTo100M = '10M < x <= 100M',
    GreaterThan100MTo1B = '100M < x <= 1B',
    GreaterThan1B = '1B < x'
}