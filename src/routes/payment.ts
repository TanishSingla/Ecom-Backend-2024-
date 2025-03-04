import express from 'express';
import { allCoupons, applyDiscount, createPaymentIntent, deleteCoupon, getCoupon, newCoupon } from '../controllers/payment.js';
import { adminOnly } from '../middlewares/auth.js';

const app = express.Router();


//String Payment
// route - /api/v1/payment/create
app.post("/create", createPaymentIntent);

// route - /api/v1/payment/coupon/new
app.get("/discount", applyDiscount);

// route - /api/v1/payment/coupon/new
app.post("/coupon/new", adminOnly, newCoupon);

// route - /api/v1/payment/coupon/all
app.get("/coupon/all", adminOnly, allCoupons);

// route - /api/v1/payment/coupon/:id
app
    .route("/coupon/:id")
    .get(adminOnly, getCoupon)
    .delete(adminOnly, deleteCoupon);

export default app;
