import { lazy } from 'react'

import { GlobalStyle, Main, Section, Container, Row, Col, View, Text, Title, InputGroup, Input, Label, Span, Error, ErrorMessage, Button, Quantity, Image, RTEContent, Copyright, TableContainer, Tr, Th, Td } from './core'

import { colors, media, fontSize, fontWeight, general, inputGeneral } from './constant'

// banner
const HomeBanner = lazy(() => import('./banner/HomeBanner'))

// card
const ProductCard = lazy(() => import('./card/ProductCard'))

// modal
const Modal = lazy(() => import('./modal/Modal'))

// product slider
const ProductSlider = lazy(() => import('./slider/ProductSlider'))

// breadcrumb
const Breadcrumb = lazy(() => import('./breadcrumb'))

// sidebar
const ProductSidebar = lazy(() => import('./sidebar/productsidebar'))
const Sidebar = lazy(() => import('./sidebar/sidebar'))

// table
const TableCom = lazy(() => import('./table'))

// form
const TextInput = lazy(() => import('./form/Input'))
const Select = lazy(() => import('./form/Select'))
const TextArea = lazy(() => import('./form/Textarea'))
const CheckBox = lazy(() => import('./form/Checkbox'))
const DatePickerField = lazy(() => import('./form/Datepicker'))

// result
const SuccessMsg = lazy(() => import('./result/SuccessMsg'))

// Ads
const Advertisement = lazy(() => import('./ads'))

const Components = {
  HomeBanner,
  Modal,
  ProductCard,
  ProductSlider,
  Breadcrumb,
  Sidebar,
  ProductSidebar,
  TableCom,
  TextInput,
  Select,
  TextArea,
  CheckBox,
  DatePickerField,
  SuccessMsg,
  Advertisement,

  // grid
  GlobalStyle,
  Main,
  Section,
  Container,
  Row,
  Col,
  View,
  Text,
  Title,
  Button,
  TableContainer,
  Tr,
  Th,
  Td,
  Quantity,
  Image,
  InputGroup,
  Input,
  Label,
  Span,
  Error,
  ErrorMessage,
  RTEContent,
  Copyright,

  // constant
  colors,
  media,
  fontSize,
  fontWeight,
  general,
  inputGeneral
}

export * from './Loading'

export default Components
