import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from '../../../components/users/signup/signup.component';


let component: SignupComponent;
let fixture: ComponentFixture<SignupComponent>;
let compiled: HTMLElement;
const languages = ["català","castellà","anglès","francès","alemany"];

describe('SignupComponent Layout', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has title Sign Up',() => { 
    expect(compiled.querySelector('h1')?.textContent).toContain('Sign Up');
  });

  it('First label contains Name',() => {
    expect(getLabelNth(0)?.textContent).toContain('Name:');
  });

  it('Second label contains Email',() => {
    expect(getLabelNth(1)?.textContent).toContain('Email:');
  });

  it('Third label contains Password',() => {
    expect(getLabelNth(2)?.textContent).toContain('Password:');
  });

  it('Fourth label contains Repeat password',() => {
    expect(getLabelNth(3)?.textContent).toContain('Repeat password:');
  });

  it('Fifth label contains Language',() => {
    expect(getLabelNth(4)?.textContent).toContain('Language:');
  });

  it('Label name contains input text field', () => {
    const inputName:HTMLElement = getLabelNth(0)!.querySelector('input')!;
    expect(inputName).toBeTruthy();
  });

  it('input tag for label name text type', () => {
    const inputName:HTMLElement = (getLabelNth(0))!.querySelector('input')!;
    expect(inputName.getAttribute("type")).toBe('text');
  });

  it('input tag for label email is of email type', () => {
    const inputEMail:HTMLElement = (getLabelNth(1))!.querySelector('input')!;
    expect(inputEMail.getAttribute("type")).toBe('email');
  });

  it('input tag for label passowrd is of password type', () => {
    const inputPassword:HTMLElement = (getLabelNth(2))!.querySelector('input')!;
    expect(inputPassword.getAttribute("type")).toBe('password');
  });

  it('input tag for label repeat passowrd is of password type', () => {
    const inputRepeatPassword:HTMLElement = (getLabelNth(3))!.querySelector('input')!;
    expect(inputRepeatPassword.getAttribute("type")).toBe('password');
  });

  it('select tag for language', () => {
    const selectElement:HTMLElement = (getLabelNth(4))!.querySelector('select')!;
    expect(selectElement).toBeTruthy();
  });

  it('Has languages', () => {
    const selectElement:HTMLSelectElement = (getLabelNth(4))!.querySelector('select')!;
    expect(selectElement.options.length).toBe(languages.length);
  });

  it('Languages are ordered.', () => {
    const selectElement:HTMLSelectElement = (getLabelNth(4))!.querySelector('select')!;
    const orderedLanguages = languages.sort();
    let index:number = 0;
    orderedLanguages.forEach(language => {
      expect(selectElement.options[index++].value).toBe(language);
    });
  });

  it('Has button send form disabled', () => {
    const button:HTMLButtonElement = compiled.querySelector("button")!;
    expect(button.disabled).toBeTrue();
  });

  
});

describe("Interactions", () => {
  
  const languages = ["català","castellà","anglès","francès","alemany"];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });
 
  it('All data OK button enabled', () => {
    const button:HTMLButtonElement = compiled.querySelector("button")!;
    const inputName:HTMLInputElement = llegirCampInput(0)!;
    const inputEmail:HTMLInputElement = llegirCampInput(1)!;
    const inputPassword:HTMLInputElement = llegirCampInput(2)!;
    const inputRepeatPassword:HTMLInputElement = llegirCampInput(3)!;
    const selectElement:HTMLSelectElement = (getLabelNth(4))!.querySelector('select')!;
    const orderedLanguages = languages.sort();

    inputName.value="Miquel";
    inputEmail.value="miquel@gmail.com";
    inputPassword.value="Pa$$w0rd";
    inputRepeatPassword.value="Pa$$w0rd";
    selectElement.value=orderedLanguages[2];
    
    inputName.dispatchEvent(new Event("input"));
    inputEmail.dispatchEvent(new Event("input"));
    inputPassword.dispatchEvent(new Event("input"));
    inputRepeatPassword.dispatchEvent(new Event("input"));
    selectElement.dispatchEvent(new Event("change"));
    

    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });

  it("All data is correct message", ()=> {
    const message:HTMLParagraphElement = compiled.querySelector("p")!;
    const inputName:HTMLInputElement = llegirCampInput(0)!;
    const inputEmail:HTMLInputElement = llegirCampInput(1)!;
    const inputPassword:HTMLInputElement = llegirCampInput(2)!;
    const inputRepeatPassword:HTMLInputElement = llegirCampInput(3)!;
    const selectElement:HTMLSelectElement = (getLabelNth(4))!.querySelector('select')!;
    const orderedLanguages = languages.sort();

    expect(message).toBeNull();

    inputName.value="Miquel";
    inputEmail.value="miquel@gmail.com";
    inputPassword.value="Pa$$w0rd";
    inputRepeatPassword.value="Pa$$w0rd";
    selectElement.value=orderedLanguages[2];
    
    inputName.dispatchEvent(new Event("input"));
    inputEmail.dispatchEvent(new Event("input"));
    inputPassword.dispatchEvent(new Event("input"));
    inputRepeatPassword.dispatchEvent(new Event("input"));
    selectElement.dispatchEvent(new Event("change"));

    fixture.detectChanges();
    const messageData=compiled.querySelector("p")!;
    expect(messageData.textContent).toBe("All data is correct message");
  });
  
});

function getLabelNth(index: number):HTMLElement {
  return compiled.querySelectorAll('label')[index];
}  
  
function llegirCampInput(index:number):HTMLInputElement {
  return getLabelNth(index)!.querySelector('input')!;
}  
  

