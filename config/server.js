module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['+6FyICQFOZa8d66mdGQnnA==','KD/A1P7kPtPfgRuPHljdKA==','N6vRBNbgcrje1rqXNpLz4Q==','GInIf3PE3q8EFuEcKmdA+g=='],
    // keys: env.array('APP_KEYS', ['+6FyICQFOZa8d66mdGQnnA==','KD/A1P7kPtPfgRuPHljdKA==','N6vRBNbgcrje1rqXNpLz4Q==','GInIf3PE3q8EFuEcKmdA+g==']),
  },
});
