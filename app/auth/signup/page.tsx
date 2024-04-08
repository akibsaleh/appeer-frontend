import Image from "next/image";
import singUpBanner from '@/public/signup-banner.jpg'
import SignUpForm from "@/components/auth/signUpForm";
import CardWrapper from "@/components/auth/card-wrapper";

const SignUpPage = () => {
    return (
        <section className="h-full w-full flex justify-center items-center">
            <div className="w-[640px] h-full flex justify-center items-center">
                <CardWrapper backLinkLabel="Sign In" backLabel="Already have an account?" backLink="/auth/login">
                    <SignUpForm />
                </CardWrapper>
            </div>
            <div className="w-full h-full py-5 flex grow">
                <Image src={singUpBanner} alt="Sign up to Appeer" className="rounded-xl h-full object-cover" />
            </div>
        </section>
    );
};

export default SignUpPage;