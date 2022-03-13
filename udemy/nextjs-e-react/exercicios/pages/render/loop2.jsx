import products from "../../data/products";

export default function loop2() {
    const withBorder = {border: "1px solid #000"}

    function renderTableLines() {
        return products.map(product => {
            return (
                <tr key={product.id}>
                    <td style={withBorder}>{product.id}</td>
                    <td style={withBorder}>{product.name}</td>
                    <td style={withBorder}>{product.price}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table style={withBorder}>
                <thead>
                <tr>
                    <th style={withBorder}>Código</th>
                    <th style={withBorder}>Nome</th>
                    <th style={withBorder}>Preço</th>
                </tr>
                </thead>
                <tbody>
                {renderTableLines()}
                </tbody>
            </table>
        </div>
    )
}