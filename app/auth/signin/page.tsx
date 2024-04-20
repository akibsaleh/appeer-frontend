import CardWrapper from "@/components/auth/card-wrapper";
import SignInForm from "@/components/auth/signInForm";
import SignInBanner from '@/public/signinBanner.jpg';
import Image from "next/image";

const SignInPage = () => {
    return (
        <section className="h-full w-full flex justify-center items-center">
            <div className="w-[640px] h-full flex justify-center items-center">
                <CardWrapper backLinkLabel="Sign Up" backLabel="Don't have an account?" backLink="/auth/signin">
                    <SignInForm />
                </CardWrapper>
            </div>
            <div className="w-full h-full py-5 flex grow">
                <Image src={SignInBanner} alt="Sign in to Appeer" className="rounded-xl h-full object-cover" />
            </div>
        </section>
    );
};

export default SignInPage;