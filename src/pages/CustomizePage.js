import React, { useState, useMemo, useCallback } from 'react';
import { ShoppingCart, RotateCcw, Trash2, Star, Award, Gift, Zap, Lock, Volume2 } from 'lucide-react';
import './CustomizePage.css';

const TYPES = {
  BASE: 'BASE',
  FLAVOR: 'FLAVOR',
  TOPPING: 'TOPPING',
  FROSTING: 'FROSTING',
};

const DraggableItem = ({ item, type, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, item, type)}
      className="draggable-item hover-lift"
    >
      <span className="item-emoji">{item.emoji}</span>
      <div className="item-details">
        <p className="item-name">{item.name}</p>
        <span className="item-price">${item.price}</span>
      </div>
      {item.popular && (
        <span className="popular-badge">
          <Zap size={12} /> Hot
        </span>
      )}
    </div>
  );
};

const CakeLayer = ({ layer, onRemove, index, total }) => {
  return (
    <div
      className="cake-layer animate-in"
      style={{
        animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
        '--delay': `${index * 0.1}s`,
      }}
    >
      <div className="layer-content">
        <span className="layer-emoji">{layer.emoji}</span>
        <div className="layer-info">
          <p className="layer-name">{layer.name}</p>
          <span className="layer-type">{layer.type}</span>
        </div>
      </div>
      <button
        className="remove-btn"
        onClick={() => onRemove(index)}
        title="Remove layer"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

const CakePreview = ({ layers }) => {
  return (
    <div className="cake-preview-container">
      <div className="cake-visual">
        {layers.length === 0 ? (
          <div className="empty-cake">
            <div className="cake-icon">🎂</div>
            <p>Build your cake here</p>
          </div>
        ) : (
          <div className="cake-stack">
            {layers.map((layer, idx) => (
              <div key={idx} className="preview-layer" style={{ '--index': idx }}>
                <span className="preview-emoji">{layer.emoji}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cake-counter">
        {layers.length > 0 && <p>{layers.length} ingredient{layers.length !== 1 ? 's' : ''}</p>}
      </div>
    </div>
  );
};

export default function CakeCustomizer() {
  const [layers, setLayers] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);

  const cakeBases = [
    { id: 1, name: 'Round Base', emoji: '🍰', price: 15, popular: true, type: TYPES.BASE },
    { id: 2, name: 'Square Base', emoji: '🟫', price: 18, popular: false, type: TYPES.BASE },
    { id: 3, name: 'Heart Base', emoji: '💝', price: 22, popular: true, type: TYPES.BASE },
  ];

  const flavors = [
    { id: 4, name: 'Chocolate', emoji: '🍫', price: 8, popular: true, type: TYPES.FLAVOR },
    { id: 5, name: 'Vanilla', emoji: '🤍', price: 6, popular: true, type: TYPES.FLAVOR },
    { id: 6, name: 'Strawberry', emoji: '🍓', price: 10, popular: false, type: TYPES.FLAVOR },
    { id: 7, name: 'Red Velvet', emoji: '❤️', price: 12, popular: true, type: TYPES.FLAVOR },
    { id: 8, name: 'Lemon', emoji: '🍋', price: 9, popular: false, type: TYPES.FLAVOR },
  ];

  const frostings = [
    { id: 9, name: 'Buttercream', emoji: '🧈', price: 12, popular: true, type: TYPES.FROSTING },
    { id: 10, name: 'Fondant', emoji: '🎨', price: 18, popular: false, type: TYPES.FROSTING },
    { id: 11, name: 'Cream Cheese', emoji: '🧀', price: 15, popular: true, type: TYPES.FROSTING },
    { id: 12, name: 'Whipped', emoji: '☁️', price: 10, popular: false, type: TYPES.FROSTING },
  ];

  const toppings = [
    { id: 13, name: 'Berries', emoji: '🫐', price: 8, type: TYPES.TOPPING },
    { id: 14, name: 'Chocolate Chips', emoji: '🍫', price: 6, type: TYPES.TOPPING },
    { id: 15, name: 'Sprinkles', emoji: '🌈', price: 4, type: TYPES.TOPPING },
    { id: 16, name: 'Flowers', emoji: '🌸', price: 12, type: TYPES.TOPPING },
    { id: 17, name: 'Caramel', emoji: '🍯', price: 7, type: TYPES.TOPPING },
    { id: 18, name: 'Gold Leaf', emoji: '✨', price: 25, type: TYPES.TOPPING },
  ];

  const total = useMemo(() => {
    return layers.reduce((sum, layer) => sum + layer.price, 0);
  }, [layers]);

  const handleDragStart = (e, item, type) => {
    setDraggedItem({ ...item, dndType: type });
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);

    if (!draggedItem) return;

    setLayers((prev) => [...prev, draggedItem]);
    setScore((s) => s + 10);
    setDraggedItem(null);
  };

  const removeLayer = (index) => {
    setLayers((prev) => prev.filter((_, i) => i !== index));
  };

  const resetAll = () => {
    setLayers([]);
    setScore(0);
    setLevel(1);
  };

  const addToCart = () => {
    if (layers.length < 2) {
      alert('Add at least 2 ingredients to create your cake!');
      return;
    }
    setShowSuccess(true);
    setLevel((lv) => lv + 1);
    setTimeout(() => {
      setShowSuccess(false);
      setLayers([]);
    }, 2000);
  };

  const completion = Math.min((layers.length / 4) * 100, 100);

  return (
    <div className="cake-customizer-wrapper">
      {/* Success Alert */}
      {showSuccess && (
        <div className="success-notification bounce-in">
          <Gift size={24} />
          <div>
            <strong>Awesome!</strong>
            <p>Cake added to cart!</p>
          </div>
        </div>
      )}

      {/* Header Stats */}
      <div className="customizer-header">
        <div className="stats-group">
          <div className="stat-card">
            <Award size={20} />
            <div>
              <span className="stat-label">Level</span>
              <p className="stat-value">{level}</p>
            </div>
          </div>
          <div className="stat-card">
            <Star size={20} />
            <div>
              <span className="stat-label">Points</span>
              <p className="stat-value">{score}</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">💰</span>
            <div>
              <span className="stat-label">Total</span>
              <p className="stat-value">${total}</p>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-label">
            <span>Completion</span>
            <span className="progress-percent">{Math.round(completion)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${completion}%` }}></div>
          </div>
        </div>
      </div>

      <div className="customizer-container">
        {/* Left Panel - Ingredients */}
        <div className="ingredients-panel">
          <h2 className="panel-title">
            <span className="title-icon">🎨</span>
            Choose Ingredients
          </h2>

          <div className="ingredients-section">
            <h3 className="section-title">Bases</h3>
            <div className="items-grid">
              {cakeBases.map((item) => (
                <DraggableItem
                  key={item.id}
                  item={item}
                  type={TYPES.BASE}
                  onDragStart={handleDragStart}
                />
              ))}
            </div>
          </div>

          <div className="ingredients-section">
            <h3 className="section-title">Flavors</h3>
            <div className="items-grid">
              {flavors.map((item) => (
                <DraggableItem
                  key={item.id}
                  item={item}
                  type={TYPES.FLAVOR}
                  onDragStart={handleDragStart}
                />
              ))}
            </div>
          </div>

          <div className="ingredients-section">
            <h3 className="section-title">Frostings</h3>
            <div className="items-grid">
              {frostings.map((item) => (
                <DraggableItem
                  key={item.id}
                  item={item}
                  type={TYPES.FROSTING}
                  onDragStart={handleDragStart}
                />
              ))}
            </div>
          </div>

          <div className="ingredients-section">
            <h3 className="section-title">Toppings</h3>
            <div className="items-grid">
              {toppings.map((item) => (
                <DraggableItem
                  key={item.id}
                  item={item}
                  type={TYPES.TOPPING}
                  onDragStart={handleDragStart}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Canvas */}
        <div className="canvas-panel">
          <h2 className="panel-title">
            <span className="title-icon">🎂</span>
            Build Your Cake
          </h2>

          {/* Cake Preview */}
          <CakePreview layers={layers} />

          {/* Drop Zone */}
          <div
            className={`drop-zone ${dragOver ? 'active' : ''} ${layers.length > 0 ? 'has-items' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {layers.length === 0 ? (
              <div className="drop-placeholder">
                <div className="drop-icon">⬇️</div>
                <p>Drag items here</p>
                <span>Build your perfect cake</span>
              </div>
            ) : (
              <div className="layers-stack">
                {layers.map((layer, idx) => (
                  <CakeLayer
                    key={`${layer.id}-${idx}`}
                    layer={layer}
                    index={idx}
                    total={layers.length}
                    onRemove={removeLayer}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="canvas-actions">
            <button className="action-btn reset-btn" onClick={resetAll}>
              <RotateCcw size={18} />
              Reset
            </button>
            <button
              className="action-btn add-cart-btn"
              onClick={addToCart}
              disabled={layers.length < 2}
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}