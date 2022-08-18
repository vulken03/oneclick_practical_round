import { Test, TestingModule } from '@nestjs/testing';
import { EmiController } from './emi.controller';
import { EmiService } from './emi.service';

describe('EmiController', () => {
  let controller: EmiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmiController],
      providers: [EmiService],
    }).compile();

    controller = module.get<EmiController>(EmiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
