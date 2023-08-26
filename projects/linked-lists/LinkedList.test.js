import LinkedList from "./LinkedList.js";

const list = new LinkedList();
describe("LinkedList methods", () => {
    test("happy path", () => {
        expect(LinkedList);
    });
    test("append(value) adds a new node containing value to the end of the list", () => {
        list.append("append1");
        list.append("append2");
        expect(list.tail().value).toBe("append2");
    });
    test("prepend(value) adds a new node containing value to the start of the list", () => {
        list.prepend("prepend");
        expect(list.head().value).toBe("prepend");
    });
    test("size returns the total number of nodes in the list", () => {
        expect(list.size()).toBe(3);
    });
    test("at(index) returns the node at the given index", () => {
        expect(list.at(1).value).toBe("append1")
    });
    test("pop removes the last element from the list", () => {
        list.pop();
        expect(list.tail().value).toBe("append1");
    });
    test("contains(value) returns true if the passed in value is in the list and otherwise returns false", () => {
        expect(list.contains("prepend")).toBe(true);
        expect(list.contains("append1")).toBe(true);
        expect(list.contains("append2")).toBe(false);
    });
    test("find(value) returns the index of the node containing value, or null if not found", () => {
        expect(list.find("prepend")).toBe(0);
        expect(list.find("append1")).toBe(1);
        expect(list.find("append2")).toBe(null);
    });
});