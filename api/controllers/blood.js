import Blood from "../models/Blood.js";
import Bank from "../models/Bank.js";

export const createBlood = async (req, res, next) => {
  const newBlood = new Blood(req.body);

  try {
    const savedBlood = await newBlood.save();
    res.status(200).json(savedBlood);
  } catch (err) {
    next(err);
  }
};
export const updateBlood = async (req, res, next) => {
  try {
    const updatedBlood = await Blood.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBlood);
  } catch (err) {
    next(err);
  }
};
export const deleteBlood = async (req, res, next) => {
  try {
    await Blood.findByIdAndDelete(req.params.id);
    res.status(200).json("Blood has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getBlood = async (req, res, next) => {
  try {
    const blood = await Blood.findById(req.params.id);
    res.status(200).json(blood);
  } catch (err) {
    next(err);
  }
};
export const getBloods = async (req, res, next) => {
  // const { min, max, ...others } = req.query;
  try {
    const bloods = await Blood.find({
      // ...others,
      // cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    // }).limit(req.query.limit);
    })
    res.status(200).json(bloods);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Blood.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const BloodCount = await Blood.countDocuments({ type: "Blood" });
    const apartmentCount = await Blood.countDocuments({ type: "apartment" });
    const resortCount = await Blood.countDocuments({ type: "resort" });
    const villaCount = await Blood.countDocuments({ type: "villa" });
    const cabinCount = await Blood.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Blood", count: BloodCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getBloodBanks = async (req, res, next) => {
  try {
    const Blood = await Blood.findById(req.params.id);
    const list = await Promise.all(
      Blood.Banks.map((Bank) => {
        return Bank.findById(Bank);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
