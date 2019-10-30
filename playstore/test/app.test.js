const {expect} = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Express App', () => {
    it('Should return the entire Book list', () => {
        return supertest(app)
            .get('/apps')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.have.an('array');
            });
    });
    it('Shouldnt be able to sort' , () => {
        return supertest(app)
            .get('/apps')
            .query({sort: 'tomato'})
            .expect(400, 'Please provide a valid Sort')
    });
    it('Should be able to sort by rating' , () => {
        return supertest(app)
            .get('/apps')
            .query({sort: 'rating'})
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.have.an('array');
            });
    });
    it('Should be able to sort by app' , () => {
        return supertest(app)
            .get('/apps')
            .query({sort: 'app'})
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.have.an('array');
            });
    });
    it('Shouldnt be able to filter out by potato' , () => {
        return supertest(app)
            .get('/apps')
            .query({genres: 'potato'})
            .expect(400, 'Please provide a valid Genre')
    });
    it('Should be able to filter out the array by puzzle' , () => {
        return supertest(app)
            .get('/apps')
            .query({genres: 'puzzle'})
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.have.an('array');
            });
    });
    it('Should be able to filter out the array by action' , () => {
        return supertest(app)
            .get('/apps')
            .query({genres: 'action'})
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.have.an('array');
            });
    });
    it('Should be able to filter out the array by action and sort by rating' , () => {
        return supertest(app)
            .get('/apps')
            .query({sort: 'rating',genres: 'action'})
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.have.an('array');
            });
    });
});