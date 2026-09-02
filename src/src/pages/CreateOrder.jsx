import { useState } from 'react'

export default function CreateOrder({ back }) {
  const [method, setMethod] = useState('USDT')
  const [amount, setAmount] = useState('')
  const [remark, setRemark] = useState('')

  const createOrder = () => {
    if (!amount) {
      alert('请输入订单金额')
      return
    }

    alert('订单创建成功')
  }

  return (
    <div className="create-order-page">

      <div className="create-order-head">
        <button onClick={back}>‹</button>

        <div>
          <h1>创建订单</h1>
          <span>创建新的收款订单</span>
        </div>
      </div>

      <section className="create-card">

        <h2>收款方式</h2>

        <div className="method-list">

          <button
            className={method === 'USDT' ? 'method active' : 'method'}
            onClick={() => setMethod('USDT')}
          >
            <span className="method-icon usdt">₮</span>

            <div>
              <strong>USDT</strong>
              <small>TRON / TRC20</small>
            </div>

            {method === 'USDT' && <b>✓</b>}
          </button>

          <button
            className={method === 'WECHAT' ? 'method active' : 'method'}
            onClick={() => setMethod('WECHAT')}
          >
            <span className="method-icon wechat">微</span>

            <div>
              <strong>微信支付</strong>
              <small>微信扫码支付</small>
            </div>

            {method === 'WECHAT' && <b>✓</b>}
          </button>

          <button
            className={method === 'ALIPAY' ? 'method active' : 'method'}
            onClick={() => setMethod('ALIPAY')}
          >
            <span className="method-icon alipay">支</span>

            <div>
              <strong>支付宝</strong>
              <small>支付宝扫码支付</small>
            </div>

            {method === 'ALIPAY' && <b>✓</b>}
          </button>

          <button
            className={method === 'BANK' ? 'method active' : 'method'}
            onClick={() => setMethod('BANK')}
          >
            <span className="method-icon bank">▤</span>

            <div>
              <strong>银行卡收款</strong>
              <small>银行卡转账</small>
            </div>

            {method === 'BANK' && <b>✓</b>}
          </button>

        </div>

      </section>

      <section className="create-card">

        <h2>订单金额</h2>

        <div className="amount-input">

          <span>¥</span>

          <input
            type="number"
            inputMode="decimal"
            placeholder="请输入金额"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />

        </div>

        {method === 'USDT' && (
          <div className="usdt-rate">
            <span>预计收款</span>
            <strong>
              {amount
                ? `${Number(amount).toFixed(2)} USDT`
                : '0.00 USDT'}
            </strong>
          </div>
        )}

      </section>

      <section className="create-card">

        <h2>订单备注</h2>

        <textarea
          placeholder="可选，填写订单备注"
          value={remark}
          onChange={e => setRemark(e.target.value)}
        />

      </section>

      <section className="order-preview">

        <div>
          <span>收款方式</span>
          <strong>
            {method === 'USDT'
              ? 'USDT TRC20'
              : method === 'WECHAT'
              ? '微信支付'
              : method === 'ALIPAY'
              ? '支付宝'
              : '银行卡收款'}
          </strong>
        </div>

        <div>
          <span>订单金额</span>
          <strong>
            {amount ? `¥${Number(amount).toFixed(2)}` : '¥0.00'}
          </strong>
        </div>

      </section>

      <button
        className="create-order-submit"
        onClick={createOrder}
      >
        创建收款订单
      </button>

      <button
        className="create-order-cancel"
        onClick={back}
      >
        返回
      </button>

    </div>
  )
}
