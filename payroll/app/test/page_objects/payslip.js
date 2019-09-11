module.exports = {
    elements: {
        payslipForm: by.name('payslipForm'),
        employeeName: by.css('form h4'),
        annualIncome: by.xpath('//td[contains(text(), "Annual Income")]/following-sibling::td'),
        super: by.xpath('//td[contains(text(), "Super")]/following-sibling::td'),
        payFrequency: by.xpath('//td[contains(text(), "Pay Frequency")]/following-sibling::td'),
        payButton: by.xpath('//button[contains(text(),"Pay")]')
    },
};