import App from "../App";
import CustomButton from "../components/button";
import Home from "../components/home";
import Input from "../components/input";

export default function Root() {
    const onClickFunc = () => {
        console.log('************')
    }
    return (
        <>
            <Input inputFor={'email'} />
            <Input inputFor={'username'} />
            <Input inputFor={'password'} />
            <CustomButton btnName={'Search'} onClickFunc={onClickFunc} />
            <Home />
        </>
    );
}