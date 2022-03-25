import List from "../../components/List";
import Item from "../../components/Item";

export default function componentWithChild() {
    return (
        <div>
            <List>
                <Item content={"Item #1"}/>
                <Item content={"Item #2"}/>
                <Item content={"Item #3"}/>
                <Item content={"Item #4"}/>
                <Item content={"Item #5"}/>
                <Item content={"Item #6"}/>
                <Item content={"Item #7"}/>
                <Item content={"Item #8"}/>
            </List>
        </div>
    )
}