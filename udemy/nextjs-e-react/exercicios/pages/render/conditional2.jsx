import If from "../../components/If";

export default function conditional2() {
    const num = 5;
    return (
        <div>
            <If test={num % 2 === 0}>
                <h1>O número {num} é par</h1>
            </If>
            <If test={num % 2 === 1}>
                <h1>O número {num} é ímpar</h1>
            </If>
        </div>
    )
}