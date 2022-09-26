function Node(data) {
  this.data = data;
  this.next = undefined;
}

function CircularLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

CircularLinkedList.prototype.insert = function (data) {
  if (!this.head) {
    this.head = this.tail = new Node(data);
    this.head.next = this.head;
  } else {
    this.tail.next = new Node(data);
    this.tail.next.next = this.head;
    this.tail = this.tail.next;
  }
  this.size++;
  console.log(`사이즈 : ${this.size}`);
};

const test = new CircularLinkedList();
test.insert(1);

CircularLinkedList.prototype.remove = function (data) {
  let curr = this.head;
  // curr : 현재, 리스트 내에서 어떤 노드를 선택하는지 판단하는 용도
  if (!curr) return;
  if (curr.data === data) {
    // 지우고싶은게 헤드인경우 실행
    this.head = this.head.next;
    this.tail.next = this.head;
    this.size--;
    return curr.data;
  }
  while (curr !== this.tail) {
    if (curr.next.data === data) {
      const tempNode = curr.next;
      curr.next = tempNode.next;
      if (tempNode === this.tail) this.tail = curr;
      return curr.data;
    }
    curr = curr.next;
  }
};

CircularLinkedList.prototype.toString = function (data) {
  if (!this.head) return "";
  // head가 없으면 빈 문자열 반환
  let curr = this.head;
  let tempStr = `${this.head.data}`;
  // 임시 문자열에 head의 data 정의
  while (curr !== this.tail) {
    // curr가 tail이 아니면 실행
    tempStr += ",";
    // head의 data가 정의되었으니 한번 끊도록 , 를 추가
    tempStr += curr.next.data;
    // 임시 문자열에 다음 Node의 data를 추가
    curr = curr.next;
    // 현재 노드를 다음 노드로 정의
  }
  return tempStr;
  // 모든 문자열이 모인 tempStr을 반환
};
