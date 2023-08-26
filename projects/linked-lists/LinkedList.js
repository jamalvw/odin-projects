import ListNode from './ListNode';

export default class LinkedList {
    constructor() { 
        this.listHead = null;
    }

    prepend(value) {
        // If there's already a head, move it up
        let next = this.listHead != null ? this.listHead : null;
        // Prepend the node
        this.listHead = new ListNode(value);
        this.listHead.nextNode = next;
    }

    append(value) {
        // If there's no nodes, set the list head
        if (this.listHead == null)
            this.listHead = new ListNode(value);
        else
            this.tail().nextNode = new ListNode(value);
    }

    size() {
        let node = this.listHead;
        let counter = 0;

        // Increment counter by 1 until we hit a null node
        while (node != null) {
            counter++;
            node = node.nextNode;
        }

        return counter;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let last = this.listHead;
        while (last.nextNode != null)
            last = last.nextNode;
        return last;
    }

    at(index) {
        let node = this.listHead;
        for (let i = 0; i < index; i++) {
            node = node.nextNode;
            if (node == null) return "Index out of bounds";
        }
        return node;
    }

    pop() {
        this.at(this.size() - 2).nextNode = null;
    }

    contains(value) {
        let node = this.listHead;
        while (node != null) {
            if (node.value === value) return true;
            node = node.nextNode;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let node = this.listHead;
        while (node != null) {
            if (node.value === value) return index;
            node = node.nextNode;
            index++;
        }
        return null;
    }

    clear() {
        this.listHead = null;
    }
}