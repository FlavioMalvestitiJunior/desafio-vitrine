 class Reference {
  constructor(
    businessId,
    url,
    imageName,
    name,
    oldPrice,
    price,
    paymentconditions
  ) {
    this._bussinessId = businessId;
    this._url = url;
    this._imageName = imageName;
    this._name = name;
    this._oldPrice = oldPrice;
    this._price = price;
    this._paymentcondition = paymentconditions;
    Object.freeze(this);
  }
  get id() {
    return this._bussinessId;
  }
  get url() {
    return this._url;
  }
  get imageName() {
    return this._imageName;
  }
  get name() {
    return this._name;
  }
  get oldPrice() {
    return this._oldPrice;
  }
  get price() {
    return this._price;
  }
  get paymentCondition() {
    return this._paymentcondition;
  }
}
