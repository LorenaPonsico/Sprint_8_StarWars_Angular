import { TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { LoginComponent } from "./login.component"


describe( `(1) TEST del componente "LoginComponent"`, () =>{

    beforeEach(async() =>{
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule, 
                FormsModule
            ],
            declarations: [
                LoginComponent
            ], 
        }).compileComponents();
    });

    it('Debe de existir el ListComponent', () =>{
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.componentInstance
        expect(app).toBeTruthy(); // expect - lo que tu esperas
    })


})