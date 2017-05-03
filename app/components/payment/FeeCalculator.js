const FeeCalculator = {
    fee: (percent, fee, charge) => (charge + fee) / (1.00 - (percent / 100)),
    stripeFee: (charge) => FeeCalculator.fee(3.4, 0.30, charge)
};

export default FeeCalculator;