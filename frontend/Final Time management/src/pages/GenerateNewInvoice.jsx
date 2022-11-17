import React from "react";

const GenerateNewInvoice = () => {
  return (
    <div class="bg-white p-5 rounded shadow">
      <div class="flex flex-col justify-center">
        <article class="md:grid grid-cols-2 gap-10">
          <div class="flex flex-col">
            <label htmlFor="name">Your full name</label>
            <input
              type="text"
              name="text"
              id="name"
              placeholder="Enter your name"
              autocomplete="off"
              value=""
            />
          </div>
          <div class="flex flex-col">
            <label htmlFor="address">Enter your address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
              autocomplete="off"
              value=""
            />
          </div>
        </article>
        <article class="md:grid grid-cols-3 gap-10">
          <div class="flex flex-col">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              autocomplete="off"
              value=""
            />
          </div>
          <div class="flex flex-col">
            <label htmlFor="website">Enter your website</label>
            <input
              type="url"
              name="website"
              id="website"
              placeholder="Enter your website"
              autocomplete="off"
              value=""
            />
          </div>
          <div class="flex flex-col">
            <label htmlFor="phone">Enter your phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              autocomplete="off"
              value=""
            />
          </div>
        </article>
        <article class="md:grid grid-cols-2 gap-10">
          <div class="flex flex-col">
            <label htmlFor="bankName">Enter your bank name</label>
            <input
              type="text"
              name="bankName"
              id="bankName"
              placeholder="Enter your bank name"
              autocomplete="off"
              value=""
            />
          </div>
          <div class="flex flex-col">
            <label htmlFor="bankAccount">Enter your bank account number</label>
            <input
              type="text"
              name="bankAccount"
              id="bankAccount"
              placeholder="Enter your bank account number"
              autocomplete="off"
              value=""
            />
          </div>
        </article>
        <article class="md:grid grid-cols-2 gap-10 md:mt-16" />
        <div class="flex flex-col">
          <label htmlFor="clientName">Enter your client's name</label>
          <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's name"
                    autocomplete="off"
                    value=""
            
                  />
          
        </div>
        <div className="flex flex-col">
                  <label htmlhtmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    autocomplete="off"
                    value=""
            
                  />
                </div>
          

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlhtmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value=""
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlhtmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value=""
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlhtmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value=""
                  />
                </div>
              </article>

             
     
    </div>
    </div>
  );
};

export default GenerateNewInvoice;
