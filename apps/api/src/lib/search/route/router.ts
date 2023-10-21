import { Router } from 'express';
import { getMarkerRoutesCollection } from '../../markerRoutes/collection.js';

const searchRouteRouter = Router();

searchRouteRouter.get('/', async (_req, res, next) => {
  try {
    const [users] = await Promise.all([
      getMarkerRoutesCollection().distinct('username', {
        isPublic: { $ne: false },
      }),
    ]);

    res.status(200).json({
      users: users,
    });
  } catch (error) {
    next(error);
  }
});

export default searchRouteRouter;
