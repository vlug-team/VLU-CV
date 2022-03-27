export class CreateCv {
	public id: number;
	public fullName: string;
	public position: string;
	public email: string;
	public phoneNumber: string;
	public address: string;
	public personalStatement: string;
	public birthDay: Date;
	public skill_1: string;
	public skillDecription_1: string;
	public skill_2: string;
	public skillDecription_2: string;
	public facebookUrl: string;
	public schoolName: string;
	public specialized: string;
	public gpa: number;
	public positioned_1: string;
	public worked_1: string;
	public description_1: string;
	public positioned_2: string;
	public worked_2: string;
	public description_2: string;
	public achievement: string;


	constructor() {
		this.id = 0;
		this.fullName = '';
		this.position='';
		this.email ='';
		this.phoneNumber="";
		this.address="";
		this.achievement = "";
		this.worked_1="";
		this.facebookUrl="";
		this.description_1="";
		this.description_2 = "";
		this.gpa=0.0;
		this.personalStatement="";
		this.position="";
		this.positioned_1="";
		this.positioned_2="";
		this.schoolName="";
		this.specialized="";
		this.skill_1="";
		this.skill_2=""

	}
}