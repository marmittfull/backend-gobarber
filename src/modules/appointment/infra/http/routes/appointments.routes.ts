import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '@modules/appointment/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointment/services/CreateAppointmentService';

import ensureAuthenticated from '@modules/user/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

// SoC: Separation of Concerns - Cada rota, service, repository deve ter uma preocupação
// DTO - Data Transfer Object

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;
  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });
  return response.json(appointment);
});

export default appointmentsRouter;
