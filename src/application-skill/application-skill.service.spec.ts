import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationSkillService } from './application-skill.service';

describe('ApplicationSkillService', () => {
  let service: ApplicationSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationSkillService],
    }).compile();

    service = module.get<ApplicationSkillService>(ApplicationSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
