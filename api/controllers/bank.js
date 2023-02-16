import Bank from "../models/Bank.js";
import Blood from "../models/Blood.js";
import { createError } from "../utils/error.js";

export const createBank = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newBank = new Bank(req.body);

  try {
    const savedBank = await newBank.save();
    try {
      await Blood.findByIdAndUpdate(hotelId, {
        $push: { Banks: savedBank._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedBank);
  } catch (err) {
    next(err);
  }
};

export const updateBank = async (req, res, next) => {
  try {
    const updatedBank = await Bank.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBank);
  } catch (err) {
    next(err);
  }
};
export const updateBankAvailability = async (req, res, next) => {
  try {
    await Bank.updateOne(
      { "BankNumbers._id": req.params.id },
      {
        $push: {
          "BankNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Bank status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteBank = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Bank.findByIdAndDelete(req.params.id);
    try {
      await Blood.findByIdAndUpdate(hotelId, {
        $pull: { Banks: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Bank has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getBank = async (req, res, next) => {
  try {
    const Bank = await Bank.findById(req.params.id);
    res.status(200).json(Bank);
  } catch (err) {
    next(err);
  }
};
export const getBanks = async (req, res, next) => {
  try {
    const Banks = await Bank.find();
    res.status(200).json(Banks);
  } catch (err) {
    next(err);
  }
};
