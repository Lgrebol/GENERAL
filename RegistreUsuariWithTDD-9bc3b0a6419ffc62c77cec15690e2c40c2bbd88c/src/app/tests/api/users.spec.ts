import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from '../../service/apiService';
import { provideHttpClient } from '@angular/common/http';

describe('getUsers', () => {
    let service: ApiService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ApiService,
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });
        service = TestBed.inject(ApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    }); 

    it('GET data', () => {
        /*
            Es comprova que la crida és correcte. Si la URL és diferent a l'especificada en el
            servei (encara que correcte) donarà un error
            Ex: 
                Utilitzar: "https://cataas.com/cat" en el test
                           "https://cataas.com/api/cats" en el servei
                        
                    o viceversa i no passarà la prova

            Es comprova que la crida es fa utilitzant el mètode GET
        */
        const dummyData = [{
            _id:"LiUPkwjlvJwVgn0b",
            mimetype:"image/png",
            size:50520,
            tags: [ "sphinx","funny" ]	
        }];

        service.getData().subscribe(data => {
            expect(data).toEqual(dummyData);
            console.log(data);
        })

        // const req = httpTestingController.expectOne("https://cataas.com/cat");
        const req = httpTestingController.expectOne("https://cataas.com/api/cats");

        expect(req.request.method).toBe('GET');
        req.flush(dummyData); 
    });

});