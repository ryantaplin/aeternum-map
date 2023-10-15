import { Router } from 'express';
import { getMarkerRoutesCollection } from '../../markerRoutes/collection.js';

const searchRouteRouter = Router();

searchRouteRouter.get('/', async (_req, res, next) => {
  try {
    const [users, regions] = await Promise.all([
      getMarkerRoutesCollection().distinct('username', {
        isPublic: { $ne: false },
      }),
      getMarkerRoutesCollection().distinct('regions'),
    ]);

    res.status(200).json({
      users: users,
      regions: regions,
    });
  } catch (error) {
    next(error);
  }
});

export default searchRouteRouter;
