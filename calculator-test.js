

describe('Monthly Payment Calculations', function() {
  it('should calculate the monthly pmt correctly', function () {
    const values = {amount: 10000, years: 3, rate: 3};
    expect(calculateMonthlyPayment(values)).toEqual('290.81');
});

  it('should calculate the monthly rate correctly', function() {
    const yearlyRate = 12;
    expect(calculateMonthlyRate(yearlyRate)).toEqual(.01);
  });

  it('should calculate the number of months of payments', function() {
    const years = 1;
    expect(calculateMonthlyTerm(years)).toEqual(12);
  });

});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 11075, years: 5, rate: 3};
  expect(calculateMonthlyPayment(values)).toEqual('199.00');
});

