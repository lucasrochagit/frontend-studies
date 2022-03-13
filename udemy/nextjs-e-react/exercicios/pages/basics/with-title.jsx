import Title from "../../components/Title";

export default function withTitle() {
    return (
        <div>
            <Title
                main={"Sign In Page"}
                secondary={"Add, update and delete things!"}
            />

            <Title
                main={"Login Page"}
                secondary={"Please inform your username and password"}
            />

            <Title
                main={"Login Page"}
                secondary={"Please inform your username and password"}
                small={true}
            />
        </div>
    )
}