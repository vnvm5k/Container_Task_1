export default class Team {
  constructor() {
    this.members = new Set(); 
  }
  
  add(member) {
    let check = this.members.has(member);
  	if (!check) {
  		this.members.add(member);
      return this.members;
  	} else {
  		throw new Error('Выбранный персонаж уже в команде!')
  	}
  }

  addAll(member) {
  	let check = member.forEach(el => {
  		let subCheck = this.members.has(el);
  		if (!subCheck) {
        this.members.add(el);
      }
  	})
    return this.members; 
  }

  toArray() {
  	return [...this.members]
  }
}