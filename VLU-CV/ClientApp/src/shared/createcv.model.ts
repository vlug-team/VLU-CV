export class CreateCv {
	public id: number;
	public fullName: string;
	public position: string;
	public email: string;
	public phoneNumber: string;
	public address: string;
	public personalStatement: string;
	public birthDay: Date = new Date(2000, 0, 1);
	public skill_1: string;
	public skillDecription_1: string;
	public skill_2: string;
	public skillDecription_2: string;
	public facebookUrl: string;
	public schoolName: string;
	public specialized: string;
	public gpa: number = 0;
	public positioned_1: string;
	public worked_1: string;
	public description_1: string;
	public positioned_2: string;
	public worked_2: string;
	public description_2: string;
	public achievement: string;
	public imageSrc: string = '';
	public userId: string;

}