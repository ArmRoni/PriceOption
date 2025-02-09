import Price from "../Price/Price";

const OptionPrices = () => {

  const priceOptons =  [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "currency": "USD",
          "billingCycle": "Monthly",
          "features": [
            "Access to gym facilities",
            "Locker room access",
            "Standard fitness classes",
            "24/7 gym access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "currency": "USD",
          "billingCycle": "Monthly",
          "features": [
            "Access to gym facilities",
            "Locker room & sauna access",
            "All group fitness classes",
            "Personalized workout plan",
            "24/7 gym access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 79.99,
          "currency": "USD",
          "billingCycle": "Monthly",
          "features": [
            "All Standard Plan benefits",
            "1-on-1 personal training (2 sessions/month)",
            "Diet and nutrition consultation",
            "Access to VIP lounge & premium locker",
            "Free guest pass (once per month)"
          ]
        },
        {
          "id": 4,
          "name": "Annual Membership",
          "price": 499.99,
          "currency": "USD",
          "billingCycle": "Yearly",
          "features": [
            "All Premium Plan benefits",
            "Unlimited personal training sessions",
            "Priority booking for fitness classes",
            "Exclusive gym merchandise",
            "Discounts on supplements and gear"
          ]
        }
      ]
      
    return (
        <div>
            <h2 className="text-5xl">Best Prices in thie town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptons.map(option => <Price key={option.id} option={option}></Price>)
            } 
            </div>
           
        </div>
    );
};

export default OptionPrices;