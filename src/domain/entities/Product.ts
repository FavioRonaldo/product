export default class Product{
    private _id: string
    private _name: string  
    private _description: string   
    private _logo: string  
    private _dateRealease: string   
    private _dateRevision: string

    constructor() {
        this._id=''
        this._name=''
        this._description=''
        this._logo=''
        this._dateRealease=''
        this._dateRevision=''
    }
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get description(): string {
        return this._description
    }
    public set description(value: string) {
        this._description = value
    }
    public get logo(): string {
        return this._logo
    }
    public set logo(value: string) {
        this._logo = value
    }
    public get dateRealease(): string {
        return this._dateRealease
    }
    public set dateRealease(value: string) {
        this._dateRealease = value
    }
    public get dateRevision(): string {
        return this._dateRevision
    }
    public set dateRevision(value: string) {
        this._dateRevision = value
    }
}