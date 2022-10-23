import { ScrewService } from './screws.service';

describe('ScrewService', () => {
  let service: ScrewService;

  beforeEach(() => {
    service = new ScrewService();
  });

  it('obtaining data from the service', () => {
    const dataList = service.getScrews();
    expect(dataList.length).toBeGreaterThan(0);
    expect(dataList.length).not.toBe(0);
    expect(dataList.length).not.toBeNull();
  });
});
