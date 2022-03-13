import Line from "./Line";

export default function Chessboard (props) {
    return (
        <div>
            <Line startsWithBlack={false} />
            <Line startsWithBlack={true} />
            <Line startsWithBlack={false} />
            <Line startsWithBlack={true} />
            <Line startsWithBlack={false} />
            <Line startsWithBlack={true} />
            <Line startsWithBlack={false} />
            <Line startsWithBlack={true} />
        </div>
    )
}