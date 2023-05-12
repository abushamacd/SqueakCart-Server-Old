const {
  createProductService,
  getProductService,
  getProductsService,
  updateProductService,
  deleteProductService,
} = require("../services/product.services");

exports.createProduct = async (req, res, next) => {
  try {
    const reqData = req.body;
    const result = await createProductService(reqData);
    res.status(200).json({
      success: true,
      message: `Product create successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Product create failed`,
      error: error.message,
    });
  }
};

// get all products
exports.getProducts = async (req, res, next) => {
  try {
    const reqData = req.query;
    const result = await getProductsService(reqData);
    res.status(200).json({
      success: true,
      message: `Products get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Products get failed`,
      error: error.message,
    });
  }
};

// get a product
exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getProductService(id);
    res.status(200).json({
      success: true,
      message: `Product get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Product get failed`,
      error: error.message,
    });
  }
};

// update product
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductService(id, req?.body);
    res.status(200).json({
      success: true,
      message: `Product update successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Product update failed`,
      error: error.message,
    });
  }
};

// update product
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductService(id);
    res.status(200).json({
      success: true,
      message: `Product delete successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Product delete failed`,
      error: error.message,
    });
  }
};