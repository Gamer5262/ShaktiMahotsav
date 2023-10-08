import GooglePayButton from '@google-pay/button-react';

const GPay = () => {
    return(
        <GooglePayButton
        environment="TEST"
        PaymentRequest = {{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods:[
                {
                    type : "CARD",
                    parameters:{
                        allowedAuthMethods:["PAN_ONLY", "CRYTOGRAM_3DS"],
                        allowedCardNetworks: ["MASTERCARD","VISA"],
                    },
                    tokenizationSpecification : {
                        type : "PAYMENT_GATEWAY",
                        parameters : {
                            gateway: "example",
                            gatewayMerchantId: "exampleID"
                        }
                    }
                }
            ],
            merchantInfo: {
                merchantId : "MerchanetID",
                merchantName : "DemoName"
            },
            transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel : "Total",
                totalPrice : "10",
                currencyCode : "INR",
                countryCode : "IN",
            },
            shippingAddressRequired: false,
            callbackIntents: ["PAYMENT_AUTHORIZATION"]
        }   
        }
        onLoadPaymentData={PaymentRequest => {
            console.log(PaymentRequest)
        }}
        onPaymentAuthorized={paymentData => {
            console.log(paymentData);
            return {transsactionState: "SUCCESS"}
        }}
        existingPaymentMethodRequired = 'false'
        buttonColor="Black"
        buttonType="buy"
        >
        </GooglePayButton>
    )
}