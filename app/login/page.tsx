import LoginForm from "@/components/components/Forms/LoginForm";

export const metadata = {
    title: 'Login',
    description: 'Login Description',
}

const LoginPage = () => {

    return (
        <>
            <section className="flex flex-col justify-between items-center py-[6rem] px-8 max-w-7xl mx-auto">
                <LoginForm />
            </section>
        </>
    )
}

export default LoginPage;