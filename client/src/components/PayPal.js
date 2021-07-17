import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

class PayPalBtn extends React.Component {
    render() {
        const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
                amount={amount}
                currency={currency}
                onSuccess={(details, data) => onSuccess(details, data)}
                options={{
                    clientId:
                        'AeTmaiCIu6IHAVI-2z4QBxtgzo5nE9uVKne8D7Fe2UN_r4Kavin6hhI-cRtTGdaJR4Dhwwpfdy666gX-',
                }}
            />
        );
    }
}

export default PayPalBtn;
