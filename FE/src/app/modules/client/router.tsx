import { RouteObject } from "react-router-dom";
import HomeComponent from "./home/home.component";
import OptionInvest from "./option-invest/option-invest.component";
import PaymentComponent from "./payment/payment.component";
import WithDrawMoney from "./withdraw-money/withdraw-money.component";
import DetailComponent from "./detail/detail.component";

export const clientRouter: RouteObject[] = [
    {
        path: "/",
        element: <HomeComponent />
    },
    {
        path: "/option",
        element: <OptionInvest />
    },
    {
        path: "/payment",
        element: <PaymentComponent />
    },
    {
        path: "/withdrawmoney",
        element: <WithDrawMoney />
    },
    {
        path: "/detail",
        element: <DetailComponent />
    },
]