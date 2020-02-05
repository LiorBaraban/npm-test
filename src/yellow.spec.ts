import 'mocha';
import { returnOne, returnTow } from './index';
import {expect,spy,use,should as shouldFn} from 'chai'
import chaiSpies from 'chai-spies'
const should = shouldFn();


use(chaiSpies);

describe('describe', ()=>{
    it('returnOne should return 1',()=>{
        let returnOneSpy = spy(returnOne);
        // returnOneSpy();
        returnOneSpy.should.not.have.been.called();
    });

    it('returnTwo should return 2', ()=>{
        expect(returnTow()).to.equal(2);
    });

    it('returnTwo should call returnOne', ()=>{
        let returnOneSpy = spy(returnOne);
        returnTow();
        returnOneSpy.should.have.been.called();
    });
});