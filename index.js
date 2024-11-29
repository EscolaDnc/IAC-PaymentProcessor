const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    try {
        const body = event;
        console.log("my code");
        const { cardNumber, amount, currency } = body;

        // Verificação simples do número do cartão
        const isApproved = cardNumber.endsWith('1111');
        const transactionId = uuidv4();

        const response = {
            transactionId: transactionId,
            amount: amount,
            currency: currency,
            status: isApproved ? 'approved' : 'declined',
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};

// TODO serverless
module.exports.runApp = async (event) => {

}