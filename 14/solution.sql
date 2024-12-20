SELECT COUNT(DISTINCT gift_exchanges.receiver_id) AS matched_wish_count
FROM gift_exchanges
JOIN user_wishlists
ON gift_exchanges.receiver_id = user_wishlists.user_id
   AND gift_exchanges.gift_name = user_wishlists.gift_name;